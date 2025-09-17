import Button from '../button'
import Input from '../input'
import TextArea from '../text-area'
import styles from './contact.module.css'

export default function Form() {
  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Fale agora mesmo com a Liva</h3>
      <form className={styles.form}>
        <Input defaultValue="Emerson Feba Cap" label="Nome" id="name" />
        <Input label="Telefone" id="phone" />
        <Input label="E-mail" id="email" autoComplete='off' />
        <TextArea label="Mensagem" id="message" />

        <Button type="submit" variant="action">
          ENVIAR MENSAGEM
        </Button>
      </form>
    </div>
  )
}
