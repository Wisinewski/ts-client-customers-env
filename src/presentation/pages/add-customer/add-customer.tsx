import AddButton from '@/presentation/components/buttons/add-button/add-button'
import CreateButton from '@/presentation/components/buttons/create-button/create-button'
import FormStatus from '@/presentation/components/form-status/form-status'
import Input from '@/presentation/components/input/input'
import ModalHeader from '@/presentation/components/modal-header/modal-header'
import React, { useEffect, useState } from 'react'
import Styles from './add-customer-styles.scss'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const AddCustomer: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    templateName: '',
    templateType: '',
    templateCi: false,
    templateCd: false,
    templateLang: '',
    templateVersion: '',
    templatePath: '',
    templateTool: '',
    gitUser: '',
    gitPassword: '',
    nameError: 'Campo obrigatório',
    templateNameError: 'Campo obrigatório',
    templateTypeError: 'Campo obrigatório',
    templateCiError: 'Campo opcional',
    templateCdError: 'Campo opcional',
    templateVendorError: 'Campo opcional',
    templateLangError: 'Campo obrigatório',
    templateVersionError: 'Campo obrigatório',
    templatePathError: 'Campo obrigatório',
    templateToolError: 'Campo obrigatório',
    gitUserError: 'Campo obrigatório',
    gitPasswordError: 'Campo obrigatório',
    sonarHostError: 'Campo obrigatório',
    sonarTokenError: 'Campo obrigatório',
    remoteStateNameError: 'Campo obrigatório',
    remoteStateBusinessUnitError: 'Campo opcional',
    remoteStateEnvironmentError: 'Campo opcional',
    remoteStateVendorError: 'Campo obrigatório',
    remoteStateRegionError: 'Campo obrigatório',
    remoteStateTypeError: 'Campo obrigatório',
    outputNameError: 'Campo obrigatório',
    mainError: ''
  })
  useEffect(() => {
    validation.validate({ name: state.name })
  }, [state.name])
  useEffect(() => {
    validation.validate({ templateName: state.templateName })
  }, [state.templateName])
  useEffect(() => {
    validation.validate({ templateType: state.templateType })
  }, [state.templateType])
  useEffect(() => {
    validation.validate({ templateCi: state.templateCi })
  }, [state.templateCi])
  useEffect(() => {
    validation.validate({ templateCd: state.templateCd })
  }, [state.templateCd])
  useEffect(() => {
    validation.validate({ templateLang: state.templateLang })
  }, [state.templateLang])
  useEffect(() => {
    validation.validate({ templateVersion: state.templateVersion })
  }, [state.templateVersion])
  useEffect(() => {
    validation.validate({ templatePath: state.templatePath })
  }, [state.templatePath])
  useEffect(() => {
    validation.validate({ templateTool: state.templateTool })
  }, [state.templateTool])
  useEffect(() => {
    validation.validate({ gitUser: state.gitUser })
  }, [state.gitUser])
  useEffect(() => {
    validation.validate({ gitPassword: state.gitPassword })
  }, [state.gitPassword])

  return (
    <div className={Styles.addCustomer}>
      <ModalHeader title="Adicionar cliente" />

      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <Input type="text" name="name" id="name" title="Nome *" />

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>template</span>
            <Input type="text" name="templateName" id="templateName" title="Nome *" />
            <div className={Styles.grid311}>
              <Input type="text" name="templateType" id="templateType" title="Tipo *" />
              <Input type="checkbox" name="templateCi" id="templateCi" title="CI" />
              <Input type="checkbox" name="templateCd" id="templateCd" title="CD" />
            </div>
            <div className={Styles.grid111}>
              <Input type="text" name="templateVendor" id="templateVendor" title="Fornecedor" />
              <Input type="text" name="templateLang" id="templateLang" title="Linguagem *" />
              <Input type="text" name="templateVersion" id="templateVersion" title="Versão *" />
            </div>
            <div className={Styles.grid11}>
              <Input type="text" name="templatePath" id="templatePath" title="Caminho *" />
              <Input type="text" name="templateTool" id="templateTool" title="Ferramenta *" />
            </div>
          </section>

          <section className={Styles.alignRight}>
            <AddButton />
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>git</span>
            <div className={Styles.grid11}>
              <Input type="text" name="gitUser" id="gitUser" title="Usuário *" />
              <Input type="text" name="gitPassword" id="gitPassword" title="Senha *" />
            </div>
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>sonar</span>
            <div className={Styles.grid11}>
              <Input type="text" name="sonarHost" id="sonarHost" title="Host *" />
              <Input type="text" name="sonarToken" id="sonarToken" title="Token *" />
            </div>
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>remote state</span>
            <Input type="text" name="remoteStateName" id="remoteStateName" title="Nome *" />
            <div className={Styles.grid11}>
              <Input type="text" name="remoteStateBusinessUnit" id="remoteStateBusinessUnit" title="Unidade" />
              <Input type="text" name="remoteStateEnvironment" id="remoteStateEnvironment" title="Ambiente" />
            </div>
            <div className={Styles.grid111}>
              <Input type="text" name="remoteStateVendor" id="remoteStateVendor" title="Fornecedor *" />
              <Input type="text" name="remoteStateRegion" id="remoteStateRegion" title="Região *" />
              <Input type="text" name="remoteStateType" id="remoteStateType" title="Tipo *" />
            </div>
          </section>

          <section className={Styles.alignRight}>
            <AddButton />
          </section>

          <section className={Styles.inputArea}>
            <span className={Styles.inputAreaTitle}>output</span>
            <Input type="text" name="outputName" id="outputName" title="Nome *" />
          </section>
        </form>

        <footer className={Styles.footer}>
          <FormStatus />
          <CreateButton disabled />
        </footer>
      </Context.Provider>
    </div>
  )
}

export default AddCustomer
