import {Controller, useForm} from "react-hook-form";
import {
	Button,
	Divider,
	TextField
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import {PasswordField} from "@/components/PasswordField";
import {FC} from "react";

interface ISignInFormProps {
	switchToSignUp: () => void;
}

interface ISignInFormInput {
	email: string;
	password: string;
}

export const SignInForm:FC<ISignInFormProps> = ({ switchToSignUp }) => {
	const { handleSubmit, control} = useForm<ISignInFormInput>({
		defaultValues: {
			email: '',
			password: ''
		}
	})
	
	const handleSignIn = (data: ISignInFormInput) => {
		console.log(data);
	}
	
	return (
		<form className="flex flex-col justify-between grow" onSubmit={handleSubmit(handleSignIn)}>
			<Button
				variant="contained"
				startIcon={<GoogleIcon />}
			>
				Sign In with Google
			</Button>
			
			<Divider className="text-black">OR</Divider>
			
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
				Sign In
			</Button>
			
			<Button onClick={switchToSignUp}>Create account</Button>
		</form>
	)
}