import re

# Arquivo que será lido
arquivo = "texto.txt"

# Expressões regulares
padroes = {

    "CEP": r"\b\d{5}-?\d{3}\b",

    "EMAIL": r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b",

    "CPF": r"\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b",

    "CNPJ": r"\b\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2}\b",

    "TELEFONE": r"\(?\d{2}\)?\s?9?\d{4}-?\d{4}",

    "PLACA": r"\b[A-Z]{3}-?\d{4}\b|\b[A-Z]{3}\d[A-Z]\d{2}\b",

    "DATA": r"\b\d{2}/\d{2}/\d{4}\b",

    "HORA": r"\b\d{2}:\d{2}\b",

    "IP": r"\b(?:\d{1,3}\.){3}\d{1,3}\b",

    "BINARIO": r"\b[01]+\b"
}


# Abre o arquivo
try:

    with open(arquivo, "r", encoding="utf-8") as f:

        linhas = f.readlines()

except FileNotFoundError:

    print("ERRO: O arquivo texto.txt não foi encontrado.")
    exit()


print("\n======================================")
print("       RESULTADO DA ANALISE")
print("======================================\n")


encontrou = False


# Percorre cada linha do arquivo
for numero_linha, linha in enumerate(linhas, start=1):

    # Percorre cada tipo de REGEX
    for nome, regex in padroes.items():

        resultados = re.findall(regex, linha)

        # Se encontrou alguma coisa
        for resultado in resultados:

            encontrou = True

            print("Encontrado:", nome)
            print("Valor:", resultado)
            print("Linha:", numero_linha)
            print("--------------------------------------")


if not encontrou:

    print("Nenhum padrão foi encontrado.")