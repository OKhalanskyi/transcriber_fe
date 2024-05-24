import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState, MouseEvent, forwardRef} from "react";
import {ControllerRenderProps} from "react-hook-form";

interface IPasswordFieldProps extends ControllerRenderProps {}

export const PasswordField = forwardRef(({ ...field }: IPasswordFieldProps) => {
	const [showPassword, setShowPassword] = useState(false);
	
	const handleClickShowPassword = () => setShowPassword((show) => !show);
	
	const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};
	
	return (
		<FormControl>
			<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
			<OutlinedInput
				id="outlined-adornment-password"
				type={showPassword ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
				{...field}
			/>
		</FormControl>
	);
});
