import styled from 'styled-components'

const MainWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.secondaryGray};
	overflow: hidden;
`

export default MainWrapper
