import {Controller, useForm} from "react-hook-form";
import {
	Button,
	Divider,
	TextField
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {PasswordField} from "@/components/PasswordField";
import {FC} from "react";

interface ISignUpFormProps {
	switchToSignIn: () => void;
}

interface ISignUpFormInput {
	fullName: string;
	email: string;
	password: string;
}

export const SignUpForm:FC<ISignUpFormProps> = ({ switchToSignIn }) => {
	const { handleSubmit, control} = useForm<ISignUpFormInput>({
		defaultValues: {
			fullName: '',
			email: '',
			password: ''
		}
	})
	
	const handleSignUp = (data: ISignUpFormInput) => {
		console.log(data);
	}
	
	return (
		<form className="flex flex-col justify-between grow " onSubmit={handleSubmit(handleSignUp)}>
			<Button
				variant="contained"
				startIcon={<GoogleIcon />}
			>
				Sign Up with Google
			</Button>
			
			<Divider className="text-black">OR</Divider>
			
			<Controller
				name={"fullName"}
				control={control}
				render={({ field }) => (
					<TextField
						required
						label={"Full name"}
						className="w-full"
						{...field}
					/>
				)}
			/>
			
			<Controller
				name={"email"}
				control={control}
				render={({ field }) => (
					<TextField
						required
						label={"Email"}
						className="w-full"
						{...field}
					/>
				)}
			/>
			
			<Controller
				name={"password"}
				control={control}
				render={({ field }) => (
					<PasswordField {...field} />
				)}
			/>
			
			<Button
				variant="contained"
			>
				Sign Up
			</Button>
			
			<Button onClick={switchToSignIn}>Already have an account</Button>
		</form>
	)
}