import ErrorPage from './Error.html'

export default mediator => ({
	name: `workbook.sheet.error`,
	route: `error-page`,
	template: ErrorPage,
	async resolve(data, params) {
		return params
	},
})
