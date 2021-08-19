import AddButton from '@/presentation/components/buttons/add-button/add-button'
import CreateButton from '@/presentation/components/buttons/create-button/create-button'
import FormStatus from '@/presentation/components/form-status/form-status'
import Input from '@/presentation/components/input/input'
import ModalHeader from '@/presentation/components/modal-header/modal-header'
import React from 'react'
import Styles from './add-customer-styles.scss'

const AddCustomer: React.FC = () => {
  return (
    <div className={Styles.addCustomer}>
      <ModalHeader title="Adicionar cliente" />

      <form className={Styles.form}>
        <Input type="text" name="name" id="name" title="Nome" />

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>template</span>
          <Input type="text" name="templateName" id="templateName" title="Nome" />
          <div className={Styles.grid3}>
            <Input type="text" name="templateType" id="templateType" title="Tipo" />
            <Input type="text" name="templateCi" id="templateCi" title="CI" />
            <Input type="text" name="templateCd" id="templateCd" title="CD" />
          </div>
          <div className={Styles.grid3}>
            <Input type="text" name="templateVendor" id="templateVendor" title="Fornecedor" />
            <Input type="text" name="templateLang" id="templateLang" title="Linguagem" />
            <Input type="text" name="templateVersion" id="templateVersion" title="Versão" />
          </div>
          <div className={Styles.grid2}>
            <Input type="text" name="templatePath" id="templatePath" title="Caminho" />
            <Input type="text" name="templateTool" id="templateTool" title="Ferramenta" />
          </div>
        </section>

        <section className={Styles.alignRight}>
          <AddButton />
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>git</span>
          <div className={Styles.grid2}>
            <Input type="text" name="gitUser" id="gitUser" title="Usuário" />
            <Input type="text" name="gitPassword" id="gitPassword" title="Senha" />
          </div>
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>sonar</span>
          <div className={Styles.grid2}>
            <Input type="text" name="sonarHost" id="sonarHost" title="Host" />
            <Input type="text" name="sonarToken" id="sonarToken" title="Token" />
          </div>
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>remote state</span>
          <Input type="text" name="remoteStateName" id="remoteStateName" title="Nome" />
          <div className={Styles.grid2}>
            <Input type="text" name="remoteStateBusinessUnit" id="remoteStateBusinessUnit" title="Unidade" />
            <Input type="text" name="remoteStateEnvironment" id="remoteStateEnvironment" title="Ambiente" />
          </div>
          <div className={Styles.grid3}>
            <Input type="text" name="remoteStateVendor" id="remoteStateVendor" title="Fornecedor" />
            <Input type="text" name="remoteStateRegion" id="remoteStateRegion" title="Região" />
            <Input type="text" name="remoteStateType" id="remoteStateType" title="Tipo" />
          </div>
        </section>

        <section className={Styles.alignRight}>
          <AddButton />
        </section>

        <section className={Styles.inputArea}>
          <span className={Styles.inputAreaTitle}>output</span>
          <Input type="text" name="outputName" id="outputName" title="Nome" />
        </section>
      </form>

      <footer className={Styles.footer}>
        <FormStatus />
        <CreateButton />
      </footer>
    </div>
  )
}

export default AddCustomer
