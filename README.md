# React MVVM Architecture

Uma proposta simples e eficiente de arquitetura **MVVM (Model-View-ViewModel)** para projetos React, ideal para aplicações de **pequeno a médio porte**. Essa arquitetura promove a separação de responsabilidades, facilitando a manutenção, a escalabilidade e a testabilidade do código.

---

## 🏗️ **Estrutura do Projeto**

A estrutura do projeto é organizada da seguinte forma:

```
  src/
  ├── Configs/ # Configurações globais da aplicação
  ├── Contexts/ # Contextos compartilhados (gerenciamento de estado global)
  ├── Hooks/ # Hooks personalizados e reutilizáveis
  ├── Models/  # Modelos de dados
  ├── Services/ # Serviços para comunicação com APIs ou lógica de negócio
  └── Views/  # Telas e componentes da aplicação
     └── Products/
        └── List/ 
          ├── ProductListView.tsx # View (Componente de apresentação)
          └── useListProductsViewModel.tsx # ViewModel (Lógica de apresentação)
```
## 🚀 **Benefícios da Arquitetura**
- Separação de Responsabilidades: A lógica de negócio (ViewModel) é separada da interface do usuário (View), facilitando a manutenção.

- Reutilização: ViewModels e Hooks podem ser reutilizados em diferentes componentes.

- Escalabilidade: Facilita a adição de novas funcionalidades sem impactar o código existente.

## 📝 **Licença**
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.