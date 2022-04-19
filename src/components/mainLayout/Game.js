export const Game = (props) => {
	const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<section className="game">
			<table className="game__board">
				<tbody> {
					rows.map((row) => {
						return (
							<tr className="game__row" key={row}>
								{
									rows.map((column) => {
										const index = row * 9 + column;
										const value = props.gameGrid[index];

										if (value !== 0) {
											if (props.initialGrid[index] === 0) {
												return (
													<td className="game__cell game__cell--userfilled" key={index} onClick={() => props.onClick(index)}>{value}</td>
												)
											} else {
												return (
													<td className="game__cell game__cell--filled" key={index} onClick={() => props.onClick(index)}>{value}</td>
												)
											}
										} else {
											return (
												<td className="game__cell" key={index} onClick={() => props.onClick(index)}>{value}</td>
											)
										}
									})
								}
							</tr>
						)
					})
				}
				</tbody>
			</table>
		</section>
	)
}