module.exports = (title, us, br) => `
  <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="../styles/univ.css" />
        <link rel="stylesheet" href="../styles/results.css" />
      </head>
      
      <body>
        <div class="results-container">
          <div class="results">
            <div class="header">EUA</div>
            <div class="product us">${us[0]}</div>
            <div class="product us">${us[1]}</div>
            <div class="product us">${us[2]}</div>
          </div>
          <div class="results">
            <div class="header">BRASIL</div>
            <div class="product br">${br[0]}</div>
            <div class="product br">${br[1]}</div>
            <div class="product br">${br[2]}</div>
          </div>
        </div>
        
      </body>
    </html>
  `;
