import { useForm, ValidationError } from '@formspree/react'
import { Button, Card, Input, Modal } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
    const [state, handleSubmit] = useForm('xqkwgkzk')
    const [success, setSuccess] = useState(false)

    function closeModal() {
        setSuccess(!success)
    }

    function openModal() {
        if (state.succeeded) {
            return setSuccess(!success)
        }
    }

    return (
        <>
            <Helmet>
                <title> Contacto </title>
            </Helmet>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
                <Card style={{ minWidth: '400px' }} cover={<img alt="" src="/contact-logo.png" />}>
                    <form name="contact" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Correo electrónico:</label>
                            <Input id="email" type="email" name="email" placeholder="example@domain.com" required={true} />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="">
                            <label htmlFor="email">Mensaje:</label>
                            <TextArea id="message" name="message" rows={3} required={true} />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <Button color="default" variant="solid" htmlType="submit" disabled={state.submitting} onClick={openModal}>
                                Enviar
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>

            <Modal open={success} onClose={closeModal}>
                <div>
                    <h2>Gracias por tu mensaje!</h2>
                    <button onClick={closeModal}>Close</button>
                </div>
            </Modal>
        </>
    )
}
export default Contact
