import styled from 'styled-components'

export const SwapModalWrapper = styled.section`
	height: 100%;
	width: 100%;

	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`

export const SwapModalAssetsWindow = styled.div`
	height: 80%;
	width: 100%;

	border: 2px solid ${({ theme }) => theme.colors.white};

	display: flex;
	align-items: center;
	justify-content: space-around;
`

export const Seperator = styled.div`
	width: 2px;
	height: 30vh;
	margin: 0 auto;
	position: fixed;
	background: ${({ theme }) => theme.colors.orange};
`
