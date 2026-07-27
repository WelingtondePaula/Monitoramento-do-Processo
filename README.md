# 🏭 Sistema de Monitoramento de Processos Industriais

Um sistema web completo para monitoramento e gestão de parâmetros críticos de máquinas e processos industriais, garantindo a qualidade e conformidade da produção.

## ✨ Funcionalidades Principais

### 📋 **Monitoramento do Processo**
- Interface intuitiva para registro de parâmetros de máquinas
- Validação automática de limites (LSL, Target, USL)
- Código visual com cores (verde/vermelho) para conformidade
- Suporte a parâmetros obrigatórios e opcionais (informativos)
- Histórico completo de medições

### 📈 **Acompanhamento e Relatórios**
- Visualização de histórico com filtros avançados:
  - Por máquina
  - Por produto
  - Por período (mês/ano)
  - Quantidade de registros customizável
- Tabelas detalhadas com comparação de valores
- Impressão formatada em A4 paisagem
- Limpeza seletiva do histórico

### ⚙️ **Painel de Engenharia** (Acesso Restrito)
- Cadastro de máquinas/equipamentos
- Cadastro de produtos
- Configuração de parâmetros por conjunto (Máquina + Produto)
- Definição de limites de controle (LSL, Target, USL)
- Gestão de parâmetros informativos vs. monitorados
- Senha mestra configurável

### 🔐 **Gestão de Acessos**
- Sistema de autenticação com matrícula e senha
- 4 níveis de permissão:
  - **Técnico**: Acesso apenas ao monitoramento
  - **Supervisão**: Visualização de histórico e acompanhamento
  - **Engenharia**: Cadastro de parâmetros
  - **Administrador**: Acesso completo
- Controle granular de abas por usuário
- Controle de papéis e atribuições

## 🚀 Como Usar

### Requisitos
- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Sem necessidade de servidor ou instalação

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/WelingtondePaula/Monitoramento-do-Processo.git
```

2. Abra o arquivo `index.html` em um navegador:
```bash
# No Windows
start index.html

# No macOS
open index.html

# No Linux
xdg-open index.html
```

### Primeiros Passos

1. **Faça login** com as credenciais padrão:
   - Matrícula: `admin`
   - Senha: `admin`

2. **Configure as máquinas e produtos** (aba Engenharia):
   - Acesse com a senha: `1234`
   - Cadastre suas máquinas
   - Cadastre seus produtos
   - Vincule parâmetros a cada combinação

3. **Inicie o monitoramento** (aba Monitoramento):
   - Selecione máquina e produto
   - Digite os valores medidos
   - Salve os registros

4. **Acompanhe os resultados** (aba Acompanhamento):
   - Visualize histórico com filtros
   - Imprima relatórios

## 📂 Estrutura do Projeto

```
Monitoramento-do-Processo/
├── index.html              # Arquivo principal (HTML)
├── css/
│   └── styles.css          # Estilos responsivos e impressão
├── js/
│   └── app.js              # Lógica da aplicação
├── assets/
│   └── logo.png            # Logo da empresa
└── README.md               # Este arquivo
```

## 🔑 Usuários Padrão

| Matrícula | Nome | Senha | Nível | Permissões |
|-----------|------|-------|-------|-----------|
| admin | Administrador | admin | Admin | Todas |
| tec1 | Técnico | 123 | Técnico | Monitoramento |
| sup1 | Supervisor | 123 | Supervisão | Histórico |
| eng1 | Engenheiro | 123 | Engenharia | Monitoramento + Engenharia |

> ⚠️ **Importante**: Altere as senhas padrão em produção!

## 💾 Armazenamento de Dados

O sistema usa **localStorage** do navegador para armazenar:
- Dados de usuários
- Configuração de máquinas e produtos
- Parâmetros de controle
- Histórico de medições

**Nota**: Os dados são locais ao navegador. Para backup, exporte os dados do localStorage.

## 🎨 Recursos Técnicos

### Frontend
- HTML5 semântico
- CSS3 com Grid e Flexbox
- JavaScript vanilla (sem dependências)
- Design responsivo (mobile-friendly)

### Funcionalidades
- Sistema de abas dinâmicas
- Validação em tempo real
- Filtragem e busca de dados
- Impressão formatada
- Suporte a múltiplos níveis de acesso

### Performance
- Sem chamadas a servidor
- Processamento local rápido
- Interface leve (~200KB)
- Funciona offline

## 🖨️ Impressão e Relatórios

Para imprimir os relatórios de acompanhamento:

1. Acesse a aba "Acompanhamento"
2. Configure os filtros desejados
3. Clique em "🖨️ Imprimir Folha de Acompanhamento"
4. Configure: Paisagem, sem margens, escala 100%

**Formato**: A4 Paisagem com dados tabulados por data e técnico

## 🔒 Segurança

### Boas Práticas
- Senhas são armazenadas localmente (considere criptografia em produção)
- Diferentes níveis de permissão por função
- Controle granular de acessos por aba
- Logs implicados de quem realizou cada ação

### Recomendações
- Use HTTPS em ambiente de produção
- Implemente autenticação externa (AD, OAuth)
- Backup regular dos dados do localStorage
- Auditar alterações sensíveis

## 🛠️ Personalização

### Adicionar nova máquina
1. Faça login como Engenheiro ou Admin
2. Aba "Engenharia" → "Cadastrar Máquina"
3. Insira o nome do equipamento

### Adicionar novo produto
1. Aba "Engenharia" → "Cadastrar Produto"
2. Insira o SKU/nome do produto

### Vincular parâmetros
1. Selecione Máquina e Produto
2. Clique "Adicionar Outro Parâmetro"
3. Configure:
   - Nome do parâmetro
   - Limite mínimo (LSL)
   - Valor alvo (Target)
   - Limite máximo (USL)
4. Marque "Orientativo" para parâmetros sem validação obrigatória

### Alterar senha de Engenharia
1. Aba "Engenharia" → Seção "Configurações"
2. Digite a nova senha (mín. 4 caracteres)
3. Clique "Atualizar Senha"

## 📊 Exemplos de Uso

### Cenário 1: Monitoramento de Injeção Plástica
- **Máquina**: Injetora 01
- **Produto**: Peça Plástica A
- **Parâmetros**:
  - Temperatura Zona 1: 200°C (180-220)
  - Pressão Injeção: 135 bar (120-150)

### Cenário 2: Linha de Produção
- **Máquina**: Estampo 02
- **Produto**: Peça Metal B
- **Parâmetros**:
  - Força Prensa: 500 kN (480-520)
  - Temperatura: 25°C (20-30) [Opcional]

## 🐛 Troubleshooting

### Dados não são salvos
- Verifique se o localStorage está habilitado
- Limpe o cache do navegador
- Tente outro navegador

### Não consigo fazer login
- Verifique a matrícula e senha
- Padrão: `admin` / `admin`
- Limpe o localStorage se alterou as senhas

### Parâmetros não aparecem no monitoramento
- Certifique-se de vincular parâmetros para a máquina+produto
- Verifique as permissões do usuário

## 📞 Suporte

Para dúvidas ou problemas, abra uma [Issue](https://github.com/WelingtondePaula/Monitoramento-do-Processo/issues) no repositório.

## 📄 Licença

Este projeto é de uso privado/interno.

## 👥 Autores

- **Wellington de Paula** - Desenvolvedor principal

---

**Última atualização**: Julho 2026
**Versão**: 1.0.0
