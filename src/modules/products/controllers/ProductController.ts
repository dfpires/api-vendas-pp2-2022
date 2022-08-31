import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import ListProductService from "../services/ListProductService";

class ProductController {

    // não se trata regra de negócio aqui
    public async create(request: Request, response: Response ): Promise<Response>{

        // obter os dados do navegador (usuário)
        let {name, quantity, price} = request.body
        // vamos criar objeto da classe CreateProductService
        const object = new CreateProductService()
        const newProduct = await object.execute({name, quantity, price})
        // retorna ou responder este novo produto criado em formato json
        return response.json(newProduct)
    }

    public async list(request: Request, response: Response ): Promise<Response> {

        let listService = new ListProductService()
        let products = await listService.execute()
        return response.json(products)

    }

    
}

export default ProductController