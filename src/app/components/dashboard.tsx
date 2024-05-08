'use client';

const projects = [];
export default function Dashboard() {
	return (
		<main style={{ height: '75vh' }}>
			{projects.length === 0 ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
						margin: 'auto 0',
					}}>
					<img
						src="#"
						width="300px"
						height="200px"
						style={{ margin: '25px 0' }}
					/>
					<span
						style={{
							fontSize: '24px',
							color: '#1A759F',
							marginBottom: '25px',
						}}>
						You currently don't have any projects!
					</span>
					<span
						style={{
							fontSize: '16px',
							color: '#1A759F',
							marginBottom: '25px',
						}}>
						Click the button below and get started.
					</span>
					<button
						style={{
							padding: '9px',
							backgroundColor: '#184E77',
							marginRight: '15px',
							borderRadius: '5px',
							border: 'none',
							color: 'white',
							fontSize: '18px',
						}}>
						Create a design
					</button>
				</div>
			) : (
				<div>there are projects!</div>
			)}
		</main>
	);
}
