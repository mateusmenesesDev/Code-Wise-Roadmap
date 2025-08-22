import { atom, useAtom } from 'jotai';

const tabAtom = atom('rate');
export const useTabs = () => {
	const [activeTab, setActiveTab] = useAtom(tabAtom);

	return { activeTab, setActiveTab };
};
