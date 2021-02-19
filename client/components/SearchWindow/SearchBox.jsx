import React from 'react'
import Web3 from 'web3'
import { useRouter } from 'next/router'

import useInputChange from '../../hooks/useInputChange'
import {
	SearchBoxTitle,
	SearchBoxWrapper,
	SearchBoxInput,
	SearchBoxP,
	SearchBoxSubmit,
	SearchInputWrapper,
	SearchInputAndTextWrapper,
} from './Styles/SearchBoxStyles'

const preventDefault = (f) => (e) => {
	e.preventDefault()
	f(e)
}

const SearchBox = () => {
	const router = useRouter()
	const web3 = new Web3(Web3.givenProvider)

	const [input, handleInputChange] = useInputChange()

	const handleSubmit = preventDefault(() => {
		const isValid = web3.utils.isAddress(input.addressToSearch)
		if (isValid) {
			router.push(`/swap/${input.addressToSearch}`)
		} else alert('Address is not valid, please try again')
	})

	return (
		<SearchBoxWrapper>
			<SearchBoxTitle>Welcome</SearchBoxTitle>
			<SearchInputAndTextWrapper>
				<SearchBoxP>
					Enter an address below, or view your current offers
				</SearchBoxP>
				<form onSubmit={handleSubmit}>
					<SearchInputWrapper>
						<SearchBoxInput
							onChange={handleInputChange}
							name='addressToSearch'
							required
						/>
						<SearchBoxSubmit />
					</SearchInputWrapper>
				</form>
			</SearchInputAndTextWrapper>
		</SearchBoxWrapper>
	)
}

export default SearchBox
