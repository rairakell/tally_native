export default FetchOverview = () => {
	console.log("called..................")
	return {
		type: "init",
		overview: {
			year: {
				out: 12000,
				in: 13500,
			},
			month: {
				out: 1200,
				in: 1350,
			},
			day: {
				out: 568,
				in: 0,
			},
			dayItems: [
				{
					id: 1,
					category: "饮食",
					amount: 12.5,
					account: "刘耒的钱包"
				},
				{
					id: 2,
					category: "服饰",
					amount: 125,
					account: "刘耒的钱包"
				},
				{
					id: 3,
					category: "服饰",
					amount: 1250,
					account: "刘耒的钱包"
				}
			]
		}
	}
}