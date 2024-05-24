'use client';

import {Modal} from "@mui/material";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {SignInForm} from "@/components/SignInForm";
import {SignUpForm} from "@/components/SignUpForm";

export const AuthenticationModal = () => {
	const [isModalOpen, setIsModalOpened] = useState(true);
	const [formType, setFormType] = useState<'sign-in' | 'sign-up'>('sign-in');
	const router = useRouter();
	
	const closeModal = () => {
		setIsModalOpened(false)
		router.back()
	};
	
	return (
		<Modal
			open={isModalOpen}
			onClose={closeModal}
		>
			<div className="flex absolute top-1/2 left-1/2 bg-blue-50 rounded-2xl -translate-y-1/2 -translate-x-1/2 p-8 gap-4 lg:w-[768px] md:w-[640px] w-96 h-[450px]">
				<div className="w-1/2 hidden md:flex text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur, cumque dolor ducimus et fugit illum inventore, ipsum laborum molestias mollitia nesciunt nisi, non nostrum perspiciatis quod repudiandae totam voluptates?</div>
				{formType === 'sign-in'
					? <SignInForm switchToSignUp={() => setFormType('sign-up')}/>
					: <SignUpForm switchToSignIn={() => setFormType('sign-in')}/>
				}
			</div>
		</Modal>
	);
}