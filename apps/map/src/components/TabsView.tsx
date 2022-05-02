import React, { FunctionComponent, useState } from 'react';

interface Tab {
	name: string;
	component: JSX.Element;
}

interface TabsViewProps {
	tabs: Tab[];
	className?: string;
}

const TabsView: FunctionComponent<TabsViewProps> = ({ tabs, className = '' }) => {
	const [activeTabIndex, setActiceTabIndex] = useState<number>(0);

	return (
		<div className={`flex flex-col ${className}`}>
			<div className="flex flex-row">
				{tabs.map(({ name }, index) => (
					<button
						key={index}
						class={`flex-1 border-b-4 text-white p-1 typo-u4 ${
							activeTabIndex === index ? 'border-white font-bold' : 'border-transparent'
						}`}
						onClick={() => setActiceTabIndex(index)}
					>
						{name}
					</button>
				))}
			</div>
			<div className="flex-1 mt-4">{tabs[activeTabIndex].component}</div>
		</div>
	);
};

export default TabsView;
