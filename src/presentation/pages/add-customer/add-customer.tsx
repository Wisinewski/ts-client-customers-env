import React from 'react'
import Styles from './add-customer-styles.scss'

const AddCustomer: React.FC = () => {
  return (
    <div className={Styles.addCustomer}>
      <header className={Styles.header}>
        <h1 className={Styles.title}>Adicionar cliente</h1>
        <button className={Styles.closeButton}>
          <i className="fas fa-times"></i>
        </button>
      </header>

      <form className={Styles.form}>
        <div className={Styles.inputWrapper}>
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
        </div>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>template</span>
          <div className={Styles.inputWrapper}>
            <label htmlFor="templateName">Nome</label>
            <input type="text" name="templateName" id="templateName" />
          </div>
          <div className={Styles.grid50}>
            <div className={Styles.inputWrapper}>
              <label htmlFor="templateType">Tipo do Template</label>
              <input type="text" name="templateType" id="templateType" />
            </div>
            <div className={Styles.inputWrapper}>
              <label htmlFor="templateType">CI</label>
              <input type="text" name="templateCi" id="templateCi" />
            </div>
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="templateLang">Linguagem</label>
            <input type="text" name="templateLang" id="templateLang" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="templateVersion">Versão</label>
            <input type="text" name="templateVersion" id="templateVersion" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="templatePath">Caminho</label>
            <input type="text" name="templatePath" id="templatePath" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="templateTool">Ferramenta</label>
            <input type="text" name="templateTool" id="templateTool" />
          </div>
        </section>

        <button className={Styles.addButton}>
          <i className="fas fa-plus"></i>
        </button>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>git</span>
          <div className={Styles.inputWrapper}>
            <label htmlFor="gitUser">Usuário</label>
            <input type="text" name="gitUser" id="gitUser" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="gitPassword">Senha</label>
            <input type="password" name="gitPassword" id="gitPassword" />
          </div>
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>sonar</span>
          <div className={Styles.inputWrapper}>
            <label htmlFor="sonarHost">Host</label>
            <input type="text" name="sonarHost" id="sonarHost" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="sonarToken">Token</label>
            <input type="text" name="sonarToken" id="sonarToken" />
          </div>
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>remote state</span>
          <div className={Styles.inputWrapper}>
            <label htmlFor="remoteStateBusinessUnit">Unidade de negócios</label>
            <input type="text" name="remoteStateBusinessUnit" id="remoteStateBusinessUnit" />
          </div>
          <div className={Styles.grid50}>
            <div className={Styles.inputWrapper}>
              <label htmlFor="remoteStateEnvironment">Ambiente</label>
              <input type="text" name="remoteStateEnvironment" id="remoteStateEnvironment" />
            </div>
            <div className={Styles.inputWrapper}>
              <label htmlFor="remoteStateVendor">Fornecedor</label>
              <input type="text" name="remoteStateVendor" id="remoteStateVendor" />
            </div>
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="remoteStateRegion">Região</label>
            <input type="text" name="remoteStateRegion" id="remoteStateRegion" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="remoteStateType">Tipo</label>
            <input type="text" name="remoteStateType" id="remoteStateType" />
          </div>
          <div className={Styles.inputWrapper}>
            <label htmlFor="remoteStateName">Nome</label>
            <input type="text" name="remoteStateName" id="remoteStateName" />
          </div>
        </section>

        <button className={Styles.addButton}>
          <i className="fas fa-plus"></i>
        </button>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>output</span>
          <div className={Styles.inputWrapper}>
            <label htmlFor="outputName">Nome</label>
            <input type="text" name="outputName" id="outputName" />
          </div>
        </section>
      </form>

      <footer className={Styles.footer}>
        <button className={Styles.createButton}>
          <i className="fas fa-plus-circle"></i>
        </button>
      </footer>
    </div>
  )
}

export default AddCustomer
