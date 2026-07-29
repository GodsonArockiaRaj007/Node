export const welcomeController=async(req,res)=>{
    res.send("Welcome to Express.js")
}

export const studentController=async(req,res)=>{
    res.json(req.body)
}

export const registerController=async(req,res)=>{
    res.json(req.body)
}

export const paramsController=async(req,res)=>{
    res.json(req.params)
}


export const productController=async(req,res)=>{
    res.json(req.query)
}

export const headerController=async(req,res)=>{
    res.json(req.headers)
}
export const loginController=async(req,res)=>{
   res.send("Login Successful")
}

export const detailsController=async(req,res)=>{
    const {id}=req.params
    const { course, batch } = req.query

    res.json({
        studentId: id,
        course: course,
        batch: batch
    })
}

export const userinfoController=async(req,res)=>{
    const id=req.params
    const body=req.body
    const headers=req.headers
    const query=req.query

    res.json({
        userId: id,
        body:body,
        headers:headers,
        query:query
    })
}

export const employeeCOntroller=async(req,res)=>{
    res.json(req.body)
}


export const employeeParamsController=async(req,res)=>{
    res.json(req.params)
}
export const employeepostController=async(req,res)=>{
    res.json(req.body)
}
export const employeeputConntroller=async(req,res)=>{
    res.json(req.params)
}

export const employeedeleteController=async(req,res)=>{
    res.json(req.params)
}

