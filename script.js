function binarySearch(){
        document.getElementById('think').classList.add('hidden');
        document.getElementById('guess').classList.add('hidden');
        document.getElementById('start').classList.add('hidden');
        document.getElementById('higher').classList.remove('hidden');
        document.getElementById('lower').classList.remove('hidden');
        document.getElementById('thatsit').classList.remove('hidden');
        document.getElementById('counter').classList.remove('hidden');
        let count=-1;
        function updatemid(){
            mid=start+Math.floor((end-start)/2);
            document.getElementById('output').innerText=mid+'?';
            count++;
            document.getElementById('counter').innerText="Guess counter: "+count;
        }
        let start=0;
        let end=100000;
        let mid=0;
        updatemid();
        document.getElementById('thatsit').addEventListener('click',()=>{
            document.getElementById('start').classList.remove('hidden');
            document.getElementById('higher').classList.add('hidden');
            document.getElementById('lower').classList.add('hidden');
            document.getElementById('thatsit').classList.add('hidden');
            document.getElementById('output').classList.add('hidden');
            document.getElementById('start').classList.add('hidden');
            document.getElementById('restart').classList.remove('hidden');
            document.getElementById('ans').innerText='You had chosen '+mid;
        });
        document.getElementById('higher').addEventListener('click',()=>{
            start=mid+1;
            updatemid();
        });
        document.getElementById('lower').addEventListener('click',()=>{
            end=mid-1;
            updatemid();
        });
    }