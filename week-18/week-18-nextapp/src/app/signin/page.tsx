import { NextRequest, NextResponse } from 'next/server';

export default function SignInPage() {
    return (
        <html>
            <head>
                <title>Sign In</title>
            </head>
            <body>
                <h1>Sign In</h1>
                <form method="POST" action="/api/signin">
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                    <br />
                    <button type="submit">Sign In</button>
                </form>
            </body>
        </html>
    );
}

