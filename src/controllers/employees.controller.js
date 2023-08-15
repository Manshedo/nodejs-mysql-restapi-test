import { pool } from '../db.js'

export const getEmployees =async(req, res) => {
    
    const identidad = req.params.id
    const result = await pool.query('select * from users where id=?',[identidad] )

         if(result[0].length <=0)  return res.status(404).json({
            message: ' Employee not found'
         })
         
            res.json(result[0])
            console.log(result[0])
}

export const updateEmployees =  async (req, res) => {
   
   const {id} = req.params
   const {name,email} = req.body
   const [result] = await pool.query('update users SET name=IFNULL(?,name), email=IFNULL(?,email) where id=?', [name,email,id])
   
   if(result.affectedRows === 0) return res.status(404).json({
      message: ' Employee not found'
   })
    
   const [result2] = await pool.query('select * from users where id=?',[id])
   res.json(result2)

}


export const deleteEmployees = async(req, res) => {


     const identidad = req.params.id
     const [result] = await pool.query('delete from users where id=?', [identidad])

     if(result.affectedRows <=0) return res.status(404).json({
      message: ' Employee not found'
     })
                
      res.sendStatus(204)
   
}

export const allEmployees = async(req, res) => {
   // const identidad = req.body
    const [result] = await pool.query('select * from users')
    res.json(result)
    console.log(result)
}
