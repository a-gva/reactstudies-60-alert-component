import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'

function UserSearch() {

    const [text, setText] = useState('')

    // Destructuring users from GithubContext
    const { users, searchUsers, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text === '') {
            // msg: Digite algo; type: error
            setAlert('Digite algo', 'error')
        } else {
            searchUsers(text)
            setText('')
        }
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>

            {/* Search */}
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            {/* Input: Pesquisar */}
                            <input
                                type="text"
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder='Pesquisar'
                                value={text}
                                onChange={handleChange}
                            />
                            {/* Botão: Buscar */}
                            <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>

            {users.length > 0 && (
                // Botão Limpar exibido somente quando  o número de usuários for maior que 0
                <div div >
                    <button onClick={clearUsers} className="btn btn-ghost btn-lg">Limpar</button>
                </div>
            )

            }
        </div >
    )
}

export default UserSearch