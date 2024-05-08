'use client';

export default function TopNavigation() {
	return (
		<nav
			style={{
				width: '100%',
				height: '60px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '15px',
				color: 'white',
				fontWeight: '400',
				fontSize: '18px',
				background: `linear-gradient(
			to right,
			transparent,
			#1A759F
		)
		#76C893`,
			}}>
			<div className="left">
				<img
					src="#"
					style={{ width: '30px', height: '30px', marginRight: '15px' }}
				/>
			</div>
			<div
				className="right"
				style={{ display: 'flex', alignItems: 'center' }}>
				<button
					style={{
						padding: '7px',
						backgroundColor: '#184E77',
						marginRight: '15px',
						borderRadius: '5px',
					}}>
					Create a design
				</button>
				<img
					src="#"
					style={{
						width: '30px',
						height: '30px',
						marginLeft: '15px',
						borderRadius: '50%',
					}}
				/>
			</div>
		</nav>
	);
}
