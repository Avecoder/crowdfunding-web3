import { useContext, createContext } from 'react'
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react'
import { ethers } from 'ethers'

const StateContext = createContext()

export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0xf42A068848f0Ab88b39b33F844632a3bcF69d12F')
    const { mutateAsync: createCampaign} = useContractWrite(contract, 'createCampaign')

    const address = useAddress()
    const connect = useMetamask()

    const publishCampaign = async (form) => {
        console.log(form)
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image
            ])

            console.log('contract call success', data)

        } catch (e) {
            console.log('contract err', e)
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCampaign
            }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)