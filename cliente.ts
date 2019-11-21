///<reference path="pessoa.ts"/>
namespace empresa{
    export class Cliente extends Pessoa{
        private _codCliente:number;
        private _Credito:number;
        private _banco:Banco;

        public getCodCliente(){
            return this._codCliente;
        }
        
        public setCodCliente(codigo:number){
            this._codCliente = codigo;
        }

        public getCredito(){
            return this._credito;
        }

        public setCredito(credito:number){
            this._Credito = credito;
        }

        public getBanco(){
            return this._banco;
        }

        public setBanco(banco:Banco){
            this._banco = banco;
        }
    }
}