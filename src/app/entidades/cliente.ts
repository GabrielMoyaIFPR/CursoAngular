export class Cliente{
  private nome : string;
  private cachorro : string;
  private telefone :  number =0;
  private custo :  number =0;

  getNome():string {
    return this.nome;
  }

  setNome(nome:string) : void{
    this.nome = nome;
  }

  getCachorro() : string {
    return this.cachorro;
  }

  setCachorro(cachorro:string) : void {
    this.cachorro = cachorro;
  }

  getTelefone():number {
    return this.telefone;
  }

  setTelefone(telefone:number) : void{
    this.telefone = telefone;
  }

  getCusto():number {
    return this.custo;
  }

  setCusto(custo:number) : void{
    this.custo = custo;
  }
}
