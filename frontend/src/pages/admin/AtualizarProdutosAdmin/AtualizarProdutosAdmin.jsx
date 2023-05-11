import React, { useState } from "react"

// Importando o Provider
import { PedidosProvider } from "../../../context/PedidosAnalistaContext"

// Importando Componentes
import { SidebarAdmin } from "../../../components/sidebar/SidebarAdmin/SidebarAdmin"
import { HeaderProdutos } from "../../../components/header/HeaderAdmin/HeaderProdutos/HeaderProdutos"
import { Modal } from "../../../components/Modal/Modal"
import { BarraAdmin } from "../../../components/BarraAdmin/BarraAdmin"
import { FormAtualizarProduto } from "../../../components/Forms/FormAtualizarProduto/FormAtualizarProduto"

// Importando os ícones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons"

// Importando CSS
import styles from "./AtualizarProdutosAdmin.module.css"


export const AtualizarProdutosAdmin = () => {
  // HANDLES DO MODAL DE CADASTRO
  const handleCloseModalProdutoCadastrado = () => {
    setOpenModalProdutoCadastrado(false)
  }

  const handleOpenModalProdutoCadastrado = (e) => {
    e.preventDefault()
    setOpenModalProdutoCadastrado(true)
  }

  const [openModalProdutoCadastrado, setOpenModalProdutoCadastrado] = useState(false)

  return (
    <PedidosProvider>
      <div id={styles["main"]}>
        <div id={styles["sidebar"]}><SidebarAdmin />
        </div>
        <div id={styles["header"]}><HeaderProdutos />
        </div>

        <div id={styles["barraPesquisa"]}>
          <BarraAdmin linkVoltar="/admin/produtos" linkCadastrar="/admin/produtos/cadastrar">
            <FontAwesomeIcon icon={faPlus} title="Cadastrar novo produto!" />
          </BarraAdmin>
          {/* AO CONSTRUIR O FORMULARIO, COMENTAR A DIV ABAIXO, ESTOU USANDO ESTE BOTÃO PARA APLICAR OS MODALS */}

        </div>

        <div id={styles["body"]}>

          <FormAtualizarProduto onClick={handleOpenModalProdutoCadastrado} />

          {/* MODAL CADASTRAR */}
          <Modal isOpen={openModalProdutoCadastrado} onClick={handleCloseModalProdutoCadastrado}>
            <div className={styles.conteudoModal}>
              <FontAwesomeIcon icon={faCircleCheck} className={styles.iconeModal} />
              <p>Produto cadastrado com sucesso!</p>
              <input
                className={styles.botaoConfirmarModal}
                type="button"
                value="OK"
                onClick={handleCloseModalProdutoCadastrado}
              />
            </div>
          </Modal>

        </div>
      </div>
    </PedidosProvider>
  )
}
