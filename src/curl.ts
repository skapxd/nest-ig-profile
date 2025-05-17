import { spawn } from 'child_process';

/**
 * Ejecuta el comando curl para una URL dada y devuelve una promesa con la salida estándar.
 * @param url URL a la que hacer la petición curl
 * @param args Argumentos adicionales para curl (opcional)
 */
export function curl(url: string, args: string[] = []): Promise<string> {
  return new Promise((resolve, reject) => {
    const curlArgs = [url, ...args];
    const child = spawn('curl', curlArgs);
    let data = '';
    let error = '';

    child.stdout.on('data', (chunk) => {
      data += Buffer.isBuffer(chunk) ? chunk.toString() : String(chunk);
    });

    child.stderr.on('data', (chunk) => {
      error += Buffer.isBuffer(chunk) ? chunk.toString() : String(chunk);
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve(data);
      } else {
        reject(new Error(`curl exited with code ${code}: ${error}`));
      }
    });

    child.on('error', (err) => {
      reject(err);
    });
  });
}
