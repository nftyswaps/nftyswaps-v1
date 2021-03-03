import styled from 'styled-components'

export const Overlay = styled.div`
	position: absolute;
	z-index: 99;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 100vh;
	width: 100%;
	padding: 6rem 2rem 10rem 2rem;

	background: ${({ theme }) => theme.colors.tertiaryGray};
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`

export const BurgerIcon = styled.a`
	z-index: 100;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	width: 22px;
	height: 22px;

	padding: 0;
	border: none;
	cursor: pointer;
	:focus {
		outline: none;
	}
	div {
		height: 2px;
		background: ${({ theme }) => theme.colors.orange};
		width: ${({ open }) => (open ? '30.42px' : '22px')};

		border-radius: 10px;
		transition: all 0.3s ease;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) =>
				open ? 'translateX(-20px)' : 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`

export default Overlay
