# Dio Bank

Implementação educacional dos desafios de TypeScript descritos no projeto de Nathally Souza (https://github.com/nathyts). Projeto criado do zero nesta pasta; não é um clone do repositório original.

Aplicação de console em TypeScript para praticar orientação a objetos com contas bancárias, herança, encapsulamento e sobrescrita de métodos.

## Tecnologias

- TypeScript com verificação estrita de tipos.
- Node.js para executar o JavaScript compilado.
- npm para os comandos de desenvolvimento, sem dependências de produção.

## Executar

Requer Node.js 18 ou superior e npm.

```sh
npm install
npm run dev
```

O comando compila o projeto para `dist/` e executa os exemplos de `app.ts`.

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Compila e executa a aplicação de console. |
| `npm run build` | Compila o TypeScript para `dist/`. |
| `npm run typecheck` | Verifica tipos sem gerar arquivos. |
| `npm test` | Compila e procura testes em `tests/*.test.cjs`. |

Para verificar tipos e compilar:

```sh
npm run typecheck
npm run build
```

**Testes:** ainda não existem arquivos de teste neste projeto. O script `npm test` está configurado, mas uma execução com zero testes não representa cobertura das regras de negócio. Não há script de lint configurado.

## Estrutura

```text
dio-bank/
├── class/
│   ├── DioAccount.ts      # Classe abstrata com saldo e operações comuns
│   ├── PeopleAccount.ts   # Conta de pessoa física com documento
│   ├── CompanyAccount.ts  # Conta empresarial com empréstimos
│   └── BonusAccount.ts    # Conta com bônus por depósito
├── app.ts                # Exemplos de uso
├── package.json          # Scripts e dependências
└── tsconfig.json         # Configuração do TypeScript
```

`dist/` e `node_modules/` são gerados localmente e ignorados pelo Git.

## Desafios implementados

- [x] Depósito e saque alteram o saldo de DioAccount.
- [x] Saque exige conta ativa e saldo estritamente maior que o valor solicitado.
- [x] CompanyAccount permite empréstimos apenas em contas ativas.
- [x] BonusAccount não adiciona atributos e soma R$ 10 por depósito válido.
- [x] Todos os atributos são privados, usando campos # do JavaScript.
- [x] name e accountNumber são readonly, sem setters.
- [x] app.ts instancia os três tipos concretos e executa suas operações.

Valores devem ser positivos, finitos e ter no máximo duas casas decimais. O saldo é armazenado em centavos para evitar erros comuns de ponto flutuante. Depósitos também exigem conta ativa. O status é definido na criação da conta.

Saldos esperados no exemplo: pessoa física R$ 70, empresa R$ 600, conta com bônus R$ 90. O exemplo também mostra um empréstimo recusado para conta inativa.

## Exemplo de uso

```ts
import { BonusAccount } from './class/BonusAccount';

const account = new BonusAccount('Conta de exemplo', 1);
account.deposit(100); // Saldo: R$ 110, incluindo o bônus
account.withdraw(20); // Saldo: R$ 90
console.log(account.getBalance()); // 90
```

Operações inválidas lançam `Error`. O saque do saldo total também é recusado: a regra do desafio exige saldo estritamente maior que o saque. Empréstimos apenas creditam o valor na conta empresarial; não há cálculo de juros ou parcelas.

## Escopo

Aplicação de console com dados fictícios e armazenamento somente em memória; não possui integração bancária, autenticação ou persistência.
