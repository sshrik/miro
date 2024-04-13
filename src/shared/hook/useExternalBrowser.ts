import { useEffect } from "react";

const useExternalBrowser = () => {
	useEffect(() => {
		const isKakaotalk = navigator.userAgent.match("KAKAOTALK");

		if (isKakaotalk) {
			window.location.href = `kakaotalk://web/openExternal?url=${window.location.href}`;
		}
	}, []);
};

export default useExternalBrowser;
