function SiteController($) {
    const self = this;
    let hospedes = 0;
    let babys = 0;

    self.Init = function () {
        $('.datepicker').datepicker();
        $('.datepicker').datepicker();
        $('#input-you-go').on('click', toggleYouGo);
        //add
        $('#btn-adult-add').on('click ', add);
        $('#btn-children-add').on('click ', add);
        $('#btn-baby-add').on('click ', add);
        //remove
        $('#btn-adult-remove').on('click ', remove);
        $('#btn-children-remove').on('click ', remove);
        $('#btn-baby-remove').on('click ', remove);
    }
    function toggleYouGo(e) {
        let $div = $("#you-go");
        $div.toggle();
    }
    function add(e) {
        let $elem = $(this);
        switch ($elem.attr('id')) {
            case 'btn-adult-add':
                let valueAdult = $("#span-adult-total").text();
                hospedes++;
                valueAdult++;
                $("#span-adult-total").text(valueAdult);
                break;
            case 'btn-children-add':
                let valueChildren = $("#span-children-total").text();
                hospedes++;
                valueChildren++;
                $("#span-children-total").text(valueChildren);
                break;
            case 'btn-baby-add':
                let valueBaby = $("#span-baby-total").text();
                babys++;
                valueBaby++;
                if (hospedes == 0) {
                    hospedes++;
                }
                $("#span-baby-total").text(valueBaby);
                break;
            default:
                break;
        }
        if (hospedes > 0) {
            $("#input-you-go").val(hospedes + " hóspedes");
        }
        if (babys > 0) {
            let textA = $("#input-you-go").val();
            let textB = " , " + babys + " bebês";
            $("#input-you-go").val(textA.concat(textB));
        }
    }
    function remove(e) {
        let $elem = $(this);
        switch ($elem.attr('id')) {
            case 'btn-adult-remove':
                let valueAdult = $("#span-adult-total").text();

                if (valueAdult > 0) {
                    hospedes--;
                    valueAdult--;
                    $("#span-adult-total").text(valueAdult);
                }
                break;
            case 'btn-children-remove':
                let valueChildren = $("#span-children-total").text();

                if (valueChildren > 0) {
                    valueChildren--;
                    hospedes--;
                    $("#span-children-total").text(valueChildren);
                }
                break;
            case 'btn-baby-remove':
                let valueBaby = $("#span-baby-total").text();

                if (valueBaby > 0) {
                    babys--;
                    valueBaby--;
                    $("#span-baby-total").text(valueBaby);
                }
                break;
            default:
                break;
        }

        if (hospedes > 0) {
            $("#input-you-go").val(hospedes + " hóspedes");
        } else {
            $("#input-you-go").val("");
        }
        if (babys > 0 && hospedes > 0) {
            let textA = $("#input-you-go").val();
            let textB = " , " + babys + " bebês";
            textA = textA.concat(textB);
            $("#input-you-go").val(textA);
        }
    }

}