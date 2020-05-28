$(function () {
    function Calculate() {
        let $num = document.getElementById('numprod').value,
            $vary = document.getElementById('vary').value;

        let $total = $num * $vary;

        return $total;
    };
    function Estimate(c) {
        let $estimateBox = document.getElementById('estconst');
        if (c == 1) {
            $estimateBox.innerHTML = Revenue(c);
        } else if (c > 1 && c <= 10) {
            $estimateBox.innerHTML = Revenue(c);
        } else if (c > 10 && c <= 100) {
            $estimateBox.innerHTML = Revenue(c);
        } else if (c > 100 && c <= 100) {
            $estimateBox.innerHTML = Revenue(c);
        } else {
            $estimateBox.innerHTML = Revenue(c);
        }
    }
    function Revenue(g) {
        let $r = document.getElementById('revenue').value;
        switch ($r) {
            case 'individual':
                return (g == 1 ? '$60' : 'This subscription is not available to you based on your revenue choice.');
                break;
            case 'basic':
                return (g <= 10 ? '$150' : 'This subscription is not available to you based on your revenue choice.');
                break;
            case 'limited':
                return (g <= 100 ? '$500' : 'This subscription is not available to you based on your revenue choice.');
                break;
            case 'advanced':
                return '$1,145';
                break;
            case 'corporate':
                return '$1,745';
                break;
            default:
                return 'Whoops, something went wrong with this calculation.'
        }
    };
    $('input, select')
        .click(function () {
            let $totalBox = document.getElementById('totalgtins');
            $totalBox.innerHTML = Calculate();
            Estimate(Calculate());

        })
        .keyup(function () {
            let $totalBox = document.getElementById('totalgtins');
            $totalBox.innerHTML = Calculate();
            Estimate(Calculate());
        });
});