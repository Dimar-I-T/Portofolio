'use client'
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Input {
    username: string,
    password: string,
}

export default function Login() {
    const router = useRouter();
    const [formData, setFormData] = useState<Input>({
        username: "",
        password: ""
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        fieldName: keyof Input
    ) => {
        const value = e.target.value;
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("username", formData.username);
        formDataToSend.append("password", formData.password);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api-admin/login-admin/`, {
            method: "POST",
            body: formDataToSend
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem("token", data.token);
            router.push('/admin/dashboard')
        } else {
            alert(data.message)
        }
    }

    return (
        <div className="bg-black bg-cover w-full min-h-screen flex justify-center items-center z-50">
            <div className="bg-tulisanBiru/10 w-150 h-auto flex flex-col py-5">
                <div className="w-full h-auto flex justify-center items-center">
                    <h1 className="text-[40px] text-putih font-bold">
                        LOGIN AS ADMIN
                    </h1>
                </div>

                <div className="w-full h-auto flex justify-center mt-5 mb-5">
                    <form onSubmit={handleSubmit}>
                        <div className="w-100 h-auto flex flex-col items-center">
                            <Input
                                type="text"
                                value={formData.username}
                                placeholder="Enter your usename"
                                onChange={(e) => handleChange(e, "username")}
                                className="w-full h-10 text-[20px] border-tulisanBiru text-objekBiru rounded-xl bg-[white]" />

                            <Input
                                type="text"
                                value={formData.password}
                                placeholder="Enter your password"
                                onChange={(e) => handleChange(e, "password")}
                                className="w-full h-10 text-[20px] border-tulisanBiru text-objekBiru rounded-xl bg-[white] mt-3" />

                            <button className="w-1/2 h-10 font-bold text-[30px] bg-tulisanBiru rounded-xl mt-10"
                                type="submit">
                                <div className="w-full h-full flex justify-center items-center">
                                    <h1 className="text-[30px] text-putih font-bold">
                                        SUBMIT
                                    </h1>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}