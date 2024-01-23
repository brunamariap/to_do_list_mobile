export const formatDate = (date?: Date) => {
	if (date) {
		const abbreviated_months = [
			'jan', 'fev', 'mar', 'abr',
			'mai', 'jun', 'jul', 'ago',
			'set', 'out', 'nov', 'dez'
		]

		const day = date.getDate();
		const abbreviated_month = abbreviated_months[date.getMonth()]
		const year = date.getFullYear()

		return `${day} ${abbreviated_month}. ${year}`;
	}
}