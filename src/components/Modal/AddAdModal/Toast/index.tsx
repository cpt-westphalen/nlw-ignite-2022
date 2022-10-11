import { createContext, useContext, useEffect } from "react";

import * as ToastPrimitive from "@radix-ui/react-toast";

import { ToastContextTypes, ToastTypes } from "../../../../types";

export const ToastContext = createContext<ToastContextTypes>({
	toast: {
		title: "",
		desc: "",
	},
	open: false,
	setOpen: (prevState: boolean) => {},
	setToast: (prevState: ToastTypes) => {},
});

export const Toast = () => {
	const { toast, open, setOpen } = useContext(ToastContext);
	console.log("toast rendered");
	return (
		<ToastPrimitive.Root
			className='flex justify-center max-w-max my-2 p-2 bg-zinc-200 text-zinc-900 rounded-md animate-fadein-top animate-slidein-top'
			open={open}
			onOpenChange={setOpen}>
			<div className='flex flex-col'>
				<ToastPrimitive.Title className='text-sm font-semibold text-zinc-900'>
					{toast.title}
				</ToastPrimitive.Title>

				<ToastPrimitive.Description className='text-xs text-zinc-700'>
					{toast.desc}
				</ToastPrimitive.Description>

				{toast.action && toast.onClick && (
					<ToastPrimitive.Action
						altText={toast.actionAlt || toast.action}>
						<button onClick={toast.onClick}>{toast.action}</button>
					</ToastPrimitive.Action>
				)}
			</div>

			<ToastPrimitive.Close
				aria-label='Fechar'
				className='flex justify-center items-center self-end text-sm font-mono text-zinc-500 hover:text-zinc-800'>
				<span aria-hidden>x</span>
			</ToastPrimitive.Close>
		</ToastPrimitive.Root>
	);
};

export const ToastProvider = ({
	toastContext,
	children,
}: {
	toastContext: ToastContextTypes;
	children: React.ReactNode | React.ReactNode[];
}) => {
	return (
		<ToastContext.Provider value={toastContext}>
			<ToastPrimitive.Provider
				duration={5000}
				label={"Aviso"}
				swipeDirection={"up"}
				swipeThreshold={30}>
				<div className='relative'>
					<ToastPrimitive.Viewport
						label={"Aviso (F8)"}
						className='absolute top-3 left-0 right-0 z-50 flex justify-center items-start'
					/>
					{children}
				</div>
			</ToastPrimitive.Provider>
		</ToastContext.Provider>
	);
};
