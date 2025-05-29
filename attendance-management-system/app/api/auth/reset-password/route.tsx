import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/app/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { token, newPassword, confirmPassword } = body;

    if (!token || !newPassword || !confirmPassword) {
        return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    if (newPassword !== confirmPassword) {
        return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
    }

    const secret = process.env.AUTH_SECRET;
    if (!secret) {
        return NextResponse.json({ message: "Server misconfiguration: missing AUTH_SECRET" }, { status: 500 });
    }

    try {
        const payload = jwt.verify(token, secret) as { userId: string };
        const userId = Number(payload.userId);

        if (isNaN(userId)) {
            return NextResponse.json({ message: "Invalid user ID in token" }, { status: 400 });
        }

        const user = await prisma.users.findUnique({ where: { id: userId } });

        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await prisma.users.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });

        return NextResponse.json({ message: "Password reset successful" }, { status: 200 });

    } catch (error: any) {
        return NextResponse.json({ message: "Invalid or expired token" }, { status: 400 });
    }
}

