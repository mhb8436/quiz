import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";
import { parse } from "path";

export async function POST(req: Request) {
  try {
    const {
      subject,
      userId,
      score,
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      unattemptedQuestions,
      percentage,
      timeSpent,
      averageTimePerQuestion,
    } = await req.json();

    const result = await prisma.score.create({
      data: {
        subject,
        userId,
        score: parseInt(score),
        totalQuestions: parseInt(totalQuestions),
        correctAnswers: parseInt(correctAnswers),
        wrongAnswers: parseInt(wrongAnswers),
        unattemptedQuestions: parseInt(unattemptedQuestions),
        percentage: parseInt(percentage),
        timeSpent: parseFloat(timeSpent),
        averageTimePerQuestion: parseFloat(averageTimePerQuestion),
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const scores = await prisma.score.groupBy({
      by: ["subject"],
      _avg: {
        score: true,
        totalQuestions: true,
        correctAnswers: true,
        wrongAnswers: true,
        unattemptedQuestions: true,
        percentage: true,
        timeSpent: true,
        averageTimePerQuestion: true,
      },
      _count: {
        userId: true,
      },
    });
    return NextResponse.json(scores);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch scores" },
      { status: 500 }
    );
  }
}
