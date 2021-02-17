import React from 'react'
import useInputChange from '../../hooks/useInputChange'
import { useRouter } from 'next/router'
import {
	SearchBoxWrapper,
	SearchBoxInput,
	SearchBoxP,
	SearchBoxSubmit,
} from './Styles/SearchBoxStyles'

const preventDefault = (f) => (e) => {
	e.preventDefault()
	f(e)
}

const SearchBox = () => {
	const router = useRouter()
	const [input, handleInputChange] = useInputChange()

	const handleSubmit = preventDefault(() => {
		router.push(`/swap/${input.addressToSearch}`)
	})

	return (
		<SearchBoxWrapper>
			<SearchBoxP>
				Enter an address below, or view your current offers
			</SearchBoxP>
			<form onSubmit={handleSubmit}>
				<SearchBoxInput
					onChange={handleInputChange}
					name='addressToSearch'
				/>
				<SearchBoxSubmit />
			</form>
		</SearchBoxWrapper>
	)
}

export default SearchBox
