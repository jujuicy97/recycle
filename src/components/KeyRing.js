

const KeyRing = () => {
    return (
        <div className="keyring">
            <div className="top-desc">
                <p className="new-icon">BRAND NEW</p>
                <h2>플라스틱 꽃잎 키링</h2>
                <p>"플라스틱의 두 번째 삶, 꽃잎 키링"</p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring01.jpeg`}/>
                <p>버려진 플라스틱에서 피어난 작은 꽃잎,<br/>오늘 당신의 일상을 장식합니다.</p>
            </div>
            <div className="middle-desc">
                <p>폐플라스틱을 수작업으로 열처리/압착 가공하여 만든 <strong>꽃잎 모양의 키링 제품</strong>입니다.</p>
                <p>제품마다 <strong>형태, 색상이 모두 달라</strong>, 세상에 하나뿐인 조합을 가집니다.</p>
                <p>가방, 열쇠, 파우치 등에 포인트로 활용 가능하며, <strong>선물용 패키지</strong>도 함께 제공됩니다.</p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring02.jpeg`}/>
            </div>
            <div className="bottom-desc">
                <p>이 제품은 <strong>버려진 플라스틱 조각 약 10g 이상을 재가공</strong>하여 만들어졌습니다.</p>
                <p>제작 과정에서 <strong>염료, 도장, 코팅을 사용하지 않으며</strong>,<br/>플라스틱의 원래 색감을 그대로 살려 <strong>자연스러운 무늬와 투명감</strong>을 구현했습니다.</p>
                <p>하나의 키링을 통해, 매립되었을 플라스틱이 <strong>일상에 스며드는 가치를 창출합니다.</strong></p>
                <img src={`${process.env.PUBLIC_URL}/images/keyring/keyring03.png`}/>
            </div>
            <div className="warn">
                <h2>유의사항</h2>
                <hr/>
                <p>● 제품은 <strong>수작업 제작</strong>되며, 꽃잎의 모양과 색상 배합이 모두 다릅니다.</p>
                <p>● 플라스틱 특성상 미세한 기포, 줄무늬, 눌림자국이 있을 수 있으며 이는 불량이 아닙니다.</p>
                <p>● 배송 시 <strong>친환경 포장재</strong>를 사용하며, 벌도 요청 시 <strong>메시지 카드 포함 가능</strong>합니다.</p>
            </div>
            <div className="notice">
                <div className="icon-txt">
                    
                </div>
            </div>
        </div>
    );
};

export default KeyRing;