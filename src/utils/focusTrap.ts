type FocusTrapTypes = (f: React.RefObject<HTMLElement>, l: React.RefObject<HTMLElement> )=> ()=>void;

export const createFocusTrap : FocusTrapTypes = (firstFocusableElementRef, lastFocusableElementRef) => {
    const handleShiftTab = (event: KeyboardEvent) => {
			if (event.shiftKey && event.key === "Tab") {
				event.preventDefault();
				lastFocusableElementRef.current?.focus();
			}
		};
		const handleTab = (event: KeyboardEvent) => {
			if (!event.shiftKey && event.key === "Tab") {
				event.preventDefault();
				firstFocusableElementRef.current?.focus();
			}
		};
		

		const focusTrap = () => {
			firstFocusableElementRef.current?.focus();
			firstFocusableElementRef.current?.addEventListener(
				"keydown",
				handleShiftTab
			);
			lastFocusableElementRef.current?.addEventListener(
				"keydown",
				handleTab
			);
		};
        
		focusTrap();
        
        const clearFocusTrap = () => {
            firstFocusableElementRef.current?.removeEventListener(
                "keydown",
                handleShiftTab
            );
            lastFocusableElementRef.current?.removeEventListener(
                "keydown",
                handleTab
            );
        };
        return clearFocusTrap;
    }