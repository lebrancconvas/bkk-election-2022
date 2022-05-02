interface SortableListHeaderProps {
	headerText: string;
	isActive: boolean;
	descending: boolean;
	sClass: string;
	headerOnClick: () => void;
	children?: React.ReactNode;
}

const ARROW_DOWN = '↓';
const ARROW_UP = '↑';

export default function SortableListHeader({
	headerText,
	sClass,
	isActive,
	descending,
	headerOnClick,
	children
}: SortableListHeaderProps) {
	return (
		<span class={`opacity-50 ${sClass} items-center gap-1`} onClick={headerOnClick}>
			{headerText}
			{isActive && (descending ? ARROW_DOWN : ARROW_UP)}
			{children}
		</span>
	);
}