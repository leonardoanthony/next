import fs from 'fs/promises';

export async function Acesso(){
    await fs.appendFile('teste.txt', `${Date.now()}\r`, 'utf8');
      const data = fs.readFile('teste.txt', 'utf8');
      return (
        <p>
          {data}
        </p>
      );
}