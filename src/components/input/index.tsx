export type InputProps = {
	type: string,
	name: string,
	className?: string,
	id?: string,
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
	value?: string,
    placeholder?:string,
}

export const Input = ({...rest}: InputProps) => {
	return (
			<input {...rest}
				required
			/>
	)
}

