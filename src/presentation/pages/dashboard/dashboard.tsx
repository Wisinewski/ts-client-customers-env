import React from 'react'
import Styles from './dashboard-styles.scss'
import CreateButton from '@/presentation/components/buttons/create-button/create-button'
import UpdateButton from '@/presentation/components/buttons/update-button/update-button'
import DeleteButton from '@/presentation/components/buttons/delete-button/delete-button'

const Dashboard: React.FC = () => {
  return (
    <div className={Styles.dashboard}>
      <header className={Styles.header}>
        <span className={Styles.logo}>ENVS</span>
        <div className={Styles.profileWrapper}>
          <i className="fas fa-user"></i>
          <button>Sair</button>
        </div>
      </header>

      <main className={Styles.contentArea}>
        <section className={Styles.categoriesArea}>
          <header className={Styles.header}>
            <h1>Categorias</h1>
          </header>
          <ul>
            <li>Clientes</li>
            <li>Repositórios</li>
          </ul>
        </section>

        <section className={Styles.crudArea}>
          <header className={Styles.contentAreaHeader}>
            <CreateButton />
          </header>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Klabin</span>
                </td>
                <td className={Styles.grid2}>
                  <UpdateButton />
                  <DeleteButton />
                </td>
              </tr>

              <tr>
                <td>
                  <span>Intelipost</span>
                </td>
                <td className={Styles.grid2}>
                  <UpdateButton />
                  <DeleteButton />
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
