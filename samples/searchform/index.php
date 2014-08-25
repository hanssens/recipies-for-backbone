<!DOCTYPE HTML>
<html>
<head>
    <meta name="viewport" content="width=device-width" />
    <title>Backbone Search Form</title>
    <link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
</head>
<body>
    <!-- Regular HTML be here... -->
    <div class="container">
        <div id="search-container"></div>
    </div>

    <!-- Template -->
    <script type="text/template" id="search-template">
        <div class="span4">
            <div class="form-group">
                <label for="input-brand">Merk</label>
                <select id="input-brand" name="brand">
                    <option value="" disabled selected>Selecteer een merk</option>
                </select>
            </div>

            <div class="form-group">
                <label for="input-model">Model</label>
                <select id="input-model" name="model" disabled>
                    <option value="" disabled selected>Selecteer eerst een merk</option>
                </select>
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-primary" value="Zoeken" />
            </div>
        </div>

        <div class="span4">
            <div class="form-group">
                <label for="input-built-from">Bouwjaar vanaf</label>
                <select id="input-built-from" name="fromYear">
                    <option value="" disabled selected>Kies vanaf bouwjaar</option>
                </select>
            </div>

            <div class="form-group">
                <label for="input-built-till">Bouwjaar tot</label>
                <select id="input-built-till" name="tillYear">
                    <option value="" disabled selected>Kies tot en met bouwjaar</option>
                </select>
            </div>
        </div>

        <div class="span4">
            <div class="form-group">
                <label for="input-price-from">Prijs vanaf</label>
                <select id="input-price-from" name="priceFrom">
                    <option value="" disabled selected>Vanaf welke prijs</option>
                </select>
            </div>

            <div class="form-group">
                <label for="input-price-till">Prijs tot</label>
                <select id="input-price-till" name="priceTill">
                    <option value="" disabled selected>Tot en met welke prijs</option>
                </select>
            </div>
        </div>
    </script>

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
    <script src="js/vehicles.js"></script>

    <script>
        $(function() {

            // initialize collection and fetch the data (async)
            var vehicles = new VehicleCollection();

            // initialize the view, and append it to element '#search-container'
            var view = new VehicleSearchView({

                // bind to the collection of models
                collection : vehicles,

                // bind to the UI element (e.g. empty div)
                el: "#search-container"
            });

            vehicles.fetch({success: function(){

                // fill dropdown with all brands
                view.fillBrands("#input-brand");
                view.fillYears("#input-built-from");
                view.fillYears("#input-built-till");
                view.fillPrices("#input-price-from");
                view.fillPrices("#input-price-till");

            }});



        });
    </script>

</body>
</html>